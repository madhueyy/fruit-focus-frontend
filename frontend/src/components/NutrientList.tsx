import React from "react";
import { List } from "@mantine/core";

interface Nutrient {
  name: string,
  amount: number,
  unit: string,
  percentOfDailyNeeds: number
}

function NutrientList({
  category,
  nutrients,
  expanded
}) {

  const getTotalAmount = (macro: Nutrient[]) => {
    for (const nutrient of macro) {
      if (nutrient.name === "total") {
        return `${nutrient.percentOfDailyNeeds}% R.D.I.`;
      }
    }

    // shouldn't happen
    return -1;
  }

  const numNutrients = (expanded) ? nutrients.length : 3;

  return category !== "macros" ? (
    <List>
      {nutrients.slice(0, numNutrients).map((elem: Nutrient, index: number) => (
        <List.Item key={index}>{`${elem.name}: ${elem.percentOfDailyNeeds}% R.D.I.`}</List.Item>
      ))}
    </List>
  ) : (
    <List>
      <List.Item>{`Carbohydrates: ${getTotalAmount(nutrients.carbohydrates)}`}</List.Item>
      <List.Item>{`Protein: ${getTotalAmount(nutrients.protein)}`}</List.Item>
      <List.Item>{`Fat: ${getTotalAmount(nutrients.fat)}`}</List.Item>
    </List>
  );
}

export default NutrientList;
