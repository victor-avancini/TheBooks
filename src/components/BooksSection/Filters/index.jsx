import CategoryFilters from "./CategoryFilters"
import PriceFilters from "./PriceFilters"
import SearchForm from "./SearchForm"

const Filters = () => {
    return (
        <div>
            <SearchForm/>
            <CategoryFilters/>
            <PriceFilters/>
            <button>Limpar filtro</button>
        </div>
    )
}

export default Filters