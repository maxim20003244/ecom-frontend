import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiRefreshCcw,
  FiSearch,
} from "react-icons/fi";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({categories}) => {
    console.log("🧾 Categories in Filter:", categories);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
    setSortOrder(searchParams.get("sortby") || "asc");
    setSearchTerm(searchParams.get("keyword") || "");
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const updatedParams = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        updatedParams.set("keyword", searchTerm);
      } else {
        updatedParams.delete("keyword");
      }
      navigate(`${pathname}?${updatedParams.toString()}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, searchParams, navigate, pathname]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    const updatedParams = new URLSearchParams(searchParams.toString());
    
  if (selectedCategory.toLowerCase() === "all") {
    updatedParams.delete("category"); // ✅ Remove filter from URL
  } else {
    updatedParams.set("category", selectedCategory);
  }
    updatedParams.set("page", "1");
    navigate(`${pathname}?${updatedParams.toString()}`);
    setCategory(selectedCategory);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set("sortby", newOrder);
    navigate(`${pathname}?${updatedParams.toString()}`);
    setSortOrder(newOrder);
    console.log("Sort order:", sortOrder);
  };

  const handleClearFilters = () => {
    navigate({ pathname });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 w-full">
      {/* Search Bar */}
      <div className="relative w-full max-w-[240px]">
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full h-[40px] focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
          <FiSearch size={18} />
        </div>
      </div>

      {/* Category + Sort Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-[500px] justify-end">
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
        <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Tooltip title={`Sort by price: ${sortOrder}`}> 
          <Button
            variant="contained"
            color="primary"
            onClick={toggleSortOrder}
            sx={{
              height: "36px",
              minWidth: "140px",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              gap: 1,
              px: 2,
            }}
          >
            Sort By
            {sortOrder === "asc" ? <FiArrowUp size={18} /> : <FiArrowDown size={18} />}
          </Button>
        </Tooltip>
    </div>
        {/* slecet products on the page  */}


        <Tooltip >
        <FormControl size="small" sx={{ minWidth: 140 }}>
  <InputLabel id="page-size-label">Per Page</InputLabel>
  <Select
    labelId="page-size-label"
    id="page-size-select"
    value={searchParams.get("pageSize") || "8"} // default fallback
    label="Per Page"
    onChange={(e) => {
      const updatedParams = new URLSearchParams(searchParams.toString());
      updatedParams.set("pageSize", e.target.value); // ✅ set new size
      updatedParams.set("page", "1"); // ✅ always reset to page 1
      navigate(`${pathname}?${updatedParams.toString()}`);
    }}
  >
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={8}>8</MenuItem>
    <MenuItem value={12}>12</MenuItem>
    <MenuItem value={20}>20</MenuItem>
  </Select>
</FormControl>
</Tooltip>

        {/* Clear Filter Button */}
        <button
          onClick={handleClearFilters}
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
