'use client'
import React, { useState } from "react";
// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });
const ShopByCategory = () => {
  // Provide an initial state with an empty array of numbers
  const [openSections, setOpenSections] = useState<any[]>([]);


  const toggleSection = (index: any) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((section) => section !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };
  // Replace this with your dynamic data from the server
  const categories = [
    {
      title: "Road",
      subcategories: ["Coats & Jackets", "Denim", "Dresses", "Sweatshirts", "Sarees", "Handbags & Bags"],
    },
    {
      title: "Electric",
      subcategories: ["Kids Toys", "Kids Wear", "Bath Accessories", "Bath Toys", "Hanky Set", "T Shirts & Tanks"],
    },
    // Add more categories here
  ];



  return (

    <div className="normal-sidebar sidebar_content">
      <div
        id="shopify-section-Ishi_sidebar"
        className="shopify-section"
      >
        <div
          data-section-id="Ishi_sidebar"
          data-section-type="sidebar-section"
        >
          <div className="left-column sidebar-categories">

            <div className="section-header bg-gray-400 px-6  h-12 text-base top-[1px] right-[1px] left-[1px]   border-[1px]  sidebar-title hidden lg:block ">
              Shop By Categories
            </div>

            <div id="accordionExample">
              {categories.map((category, index) => (
                <div key={index} className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                  <h2 className="mb-0" id={`heading-${index}`}>
                    <button
                      className={`group relative flex w-full items-center rounded-t-[15px] 
                      border-0 bg-white px-5 py-1 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white ${openSections.includes(index) ? 'bg-white text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]' : ''}`}
                      type="button"
                      data-te-collapse-init
                      data-te-target={`#collapse-${index}`}
                      aria-expanded={openSections.includes(index)}
                      onClick={() => toggleSection(index)}
                    >
                      {category.title}
                      <span
                        className={`ml-auto h-5 w-5 shrink-0 rotate-${openSections.includes(index) ? '0' : '[-180deg]'} fill-${openSections.includes(index) ? '#212529' : '#336dec'} transition-transform duration-200 ease-in-out group-${openSections.includes(index) ? 'rotate-0' : 'rotate-[-180deg]'} motion-reduce:transition-none dark:fill-blue-300 dark:group-${openSections.includes(index) ? 'fill-white' : ''}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse-${index}`}
                    className={`!visible ${openSections.includes(index) ? '' : 'hidden'}`}
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby={`heading-${index}`}
                    data-te-parent="#accordionExample"
                  >
                    <div className="px-5 py-1">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div className="panel-body category_submenu" key={subIndex}>
                          <a href={`/collections/${subcategory}`} className="dropdown-item">
                            {subcategory}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
