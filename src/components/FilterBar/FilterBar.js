import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTypes } from "../../state/pokemons/actions";
import { setSearch } from "../../state/pokemons/actions";
import { setFilter } from "../../state/pokemons/actions";

const FilterBar = () => {
  const search = useSelector((state) => state.pokemons.search);
  const types = useSelector((state) => state.pokemons.types);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search for pokemons..."
        value={search}
        onChange={(event) => dispatch(setSearch(event.target.value))}
        className="filter-bar__search"
      />
      <select
        onChange={(event) => dispatch(setFilter(event.target.value))}
        className="filter-bar__select"
      >
        <option value="all">all</option>
        {types.map((type) => {
          return (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterBar;
