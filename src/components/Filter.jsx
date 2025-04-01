import { useState } from "react";
import { FiArrowUp, FiRefreshCcw, FiSearch } from "react-icons/fi";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";

const Filter = () => {
  const categories = [
    { categoryId: 1, categoryName: "Electronics" },
    { categoryId: 2, categoryName: "Clothing" },
    { categoryId: 3, categoryName: "Furniture" },
    { categoryId: 4, categoryName: "Books" },
    { categoryId: 5, categoryName: "Toys" },
  ];

  const [category, setCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 w-full">
      {/* Search Bar */}
      <div className="relative w-full max-w-[240px]">
  <input
    type="text"
    placeholder="Search Products"
    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full h-[40px] focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
  />
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
    <FiSearch size={18} />
  </div>
</div>

      {/* Category + Sort Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-[500px] justify-end">
        {/* Category */}
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryName}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sort Button */}
        <Tooltip title="Sort by price: asc">
          <Button
            variant="contained"
            color="primary"
            sx={{
                height: "36px",
                minWidth: "140px",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.875rem",
                gap: 1,
                px: 2,
              }}>
                
            Sort By
            <FiArrowUp size={18} />
          </Button>
        </Tooltip>

        <button
    className="flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-3 h-9 min-w-[140px] rounded-md text-sm font-medium shadow-sm transition duration-200"
  >
    <FiRefreshCcw size={16} />
    Clear Filter
  </button>
      </div>
    </div>
  );
};

export default Filter;
