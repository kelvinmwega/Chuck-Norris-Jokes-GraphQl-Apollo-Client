import * as React from "react";
import { JokesCategoriesQuery } from "../../generated/graphql";
import "./styles.css";

export interface OwnProps {
  handleCategoryChange: (newCategory: string) => void;
}

interface Props extends OwnProps {
  data: JokesCategoriesQuery;
}

const className = "JokeCategories";

const Categories: React.FC<Props> = ({ data, handleCategoryChange }) => (
  <div className={className}>
    <h3>Categories</h3>
    <ol className={`${className}__list`}>
      {!!data.categories &&
        data.categories.map(
          (category, i) =>
            !!category && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleCategoryChange(category!)}
              >
                {category}
              </li>
            )
        )}
    </ol>
  </div>
);

export default Categories;
