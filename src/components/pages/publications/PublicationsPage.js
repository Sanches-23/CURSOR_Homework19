import jsonData from './components/PostInfo.json';
import Base from "./components/base/Base";

const PublicationsPage = () => {
  return (

      <Base data={jsonData.post}></Base>

  );
}

export default PublicationsPage;
