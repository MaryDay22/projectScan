import { useContext, useState } from "react";
import { TokenContext } from "../../app/global/providers/TokenProvider/lib/TokenContext";
import { useNavigate } from "react-router-dom";

const HISTOGRAM_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SEARCH_HISTOGRAMS}`;
const OBJECT_SEARCH_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SEARCH}`;
const DOC_SEARCH_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SEARCH_DOC}`;


export const useForm = () => {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    inn: "7710137066",
    tonality: "any",
    limit: 1,
    startDate: "",
    endDate: "",
    maxFullness: false,
    inBusinessContext: null,
    mainRole: true,
    onlyWithRiskFactors: false,
    includeTechNews: true,
    includeAnnouncements: true,
    includeDigests: true,
  });

  const [histogramData, setHistogramData] = useState([]);
  const [resError, setResError] = useState(null);
  const [encodedId, setEncodedId] = useState({})

  const formFetcher = (url, requestBody, stateCB, errCB, sessionKey) => {
    if (token) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          stateCB(data);
          sessionStorage.setItem(sessionKey, JSON.stringify(data));
          navigate("/result");
          console.log(data);
        })
        .catch((error) => {
          errCB(error);
          console.error(error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      issueDateInterval: {
        startDate: new Date(formData.startDate).toISOString(),
        endDate: new Date(formData.endDate).toISOString(),
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: formData.inn,
              maxFullness: formData.maxFullness,
              inBusinessNews: formData.inBusinessContext,
            },
          ],
          onlyMainRole: formData.mainRole,
          tonality: formData.tonality,
          onlyWithRiskFactors: formData.onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: !formData.includeTechNews,
        excludeAnnouncements: !formData.includeAnnouncements,
        excludeDigests: !formData.includeDigests,
      },
      similarMode: "duplicates",
      limit: formData.limit,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    };

    formFetcher(
      HISTOGRAM_URL,
      requestBody,
      setHistogramData,
      setResError,
      process.env.REACT_APP_LS_KEY_HISTOGRAMS
    );
    formFetcher(
      OBJECT_SEARCH_URL,
      requestBody,
      setEncodedId,
      setResError,
      process.env.REACT_APP_LS_KEY_ENCODED_ID
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  return {
    formData,
    handleSubmit,
    handleChange,
    histogramData,
    encodedId
  };
};
