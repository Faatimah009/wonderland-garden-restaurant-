import React from "react";

const SearchBar = () => {
  return (
    <div className=" d-flex search-menu  bg-dark text-white  g ">
      <div
        className="container d-flex "
        style={{
          justifyContent: "center",
          width: "fit-content",
          margin: "0px ",
        }}
      >
        <input
          type="search"
          placeholder="Search our menu..."
          style={{ width: "240px", height: "40px" }}
        />
        &nbsp;&nbsp;
        <div className="container range">
          <label htmlFor="">Price Range</label>
          <input className='inputrange' type="range" min="500" max="25000" defaultValue="500" />{" "}
          <p>₦500 - ₦25,000+</p>
        </div>
      </div>

      <div className="container d-inline-flex gap-3 options">
        <div>
          <label htmlFor="dish_type">Dish Type</label> <br />
          <select name="dish_type" id="dish_type">
            <option value="">Jollof,ofada,fried</option>
            <option value="Jollof">Jollof</option>
            <option value="Fried">Fried</option>
            <option value="Ofada">Ofada</option>
          </select>
        </div>
        <div>
          <label htmlFor="Protein_type">Protein Type</label> <br />
          <select name="Protein_type" id="Protein_type">
            <option value="">Beef,chicken,Ram,Goat</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Ram">Ram</option>
            <option value="Goat">Goat</option>
          </select>
        </div>
        <div>
          <label htmlFor="spice_level">Spice Level</label>
          <br />
          <select name="spice_level" id="spice_level">
            <option value="">Mild,Medium</option>
            <option value="Mild">Mild</option>
            <option value="Medium">Medium</option>
          </select>
        </div>
        <div>
          <label htmlFor="dietary-restrictions">Dietary Restrictions</label>{" "}
          <br />
          <select name="dietary-restrictions" id="dietary-restrictions">
            <option value="">Vegetarian,Gluten-Free</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;