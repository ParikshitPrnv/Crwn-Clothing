import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Directory;
