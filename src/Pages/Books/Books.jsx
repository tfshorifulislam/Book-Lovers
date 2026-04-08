import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../../Components/ListingBook/ReadBook';
import WishBook from '../../Components/ListingBook/WishBook';

const Books = () => {

    const [sortingType, setSortingType] = useState('')

    console.log(sortingType)
    return (
        <div>
            <div className='bg-[#13131310] rounded-2xl py-8 flex justify-center items-center mb-8'>
                <p className='font-bold text-[#131313] text-2xl'>Books</p>
            </div>
            <div className='flex justify-center items-center mb-14'>
                <div className="dropdown">
                    <div
                        tabIndex={0} role="button"
                        className="btn bg-[#23BE0A] rounded-lg text-white flex items-center">
                        Short By: {sortingType} <MdKeyboardArrowDown className='text-2xl' />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>setSortingType('Pages')}><a>Pages</a></li>
                        <li onClick={()=>setSortingType('Rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <ReadBook sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <WishBook sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;