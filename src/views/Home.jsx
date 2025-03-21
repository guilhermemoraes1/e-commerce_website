import CategoryList from '../components/CategoriesList';
import '../App';
import ProdutoItem from '../components/ProdutosList';

const Home = () => {
  return (
    <>
    <div className="list-container">
      <CategoryList />
      <ProdutoItem />
    </div>
    </>
  );
};

export default Home;
