import Button from "../../ui/Button/Button";
import css from "./UserProfile.module.css";

const UserProfile = ({ name, image, text, logOut, className, open }) => {
  const rootClassName = [css.user, !open?className:null];

  return (
    <div className={rootClassName.join(" ")}>
      <div className={css.user_info}>
        <p>{name}</p>
        <Button handler={logOut} className={css.button_logout} text={text} />
      </div>
      <div className={css.image_wrapper}>
        <img className={css.image} src={image} alt="usr_photo" />
      </div>
    </div>
  );
};
export default UserProfile;
