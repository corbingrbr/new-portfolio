export const createDefaultFilterState = (filterCategories) =>
  filterCategories.map((category) => ({
    ...category,
    options: category.options.map((option) => ({ ...option, checked: false })),
  }));

export const countActiveFilters = (filterCategories) =>
  filterCategories
    .flatMap((category) => category.options)
    .filter((option) => option.checked).length;

export const isChecked = (option) => option.checked;
export const getValue = (filter) => filter.value;

export const toggleChangedFilter = (value_to_toggle) => (filter) =>
  filter.value === value_to_toggle
    ? { ...filter, checked: !filter.checked }
    : filter;

export const hasEverySelectedOption = (selectedOptions, availableOptions) =>
  selectedOptions.every((selectedOption) =>
    availableOptions.includes(selectedOption)
  );
