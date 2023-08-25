import jsonData from './components/PostInfo.json';
import Base from "./components/base/Base";
import PublicationsStyle from "./components/styles/Base.module.css";

const PublicationsPage = () => {
  return (

      <div className={PublicationsStyle.wrapper}>
        <Base data={jsonData.post}></Base>
        <Base data={jsonData.post}></Base>
        <Base data={jsonData.post}></Base>
      </div>

  );
}

export default PublicationsPage;
