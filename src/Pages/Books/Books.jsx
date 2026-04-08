import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../../Components/ListingBook/ReadBook';
import WishBook from '../../Components/ListingBook/WishBook';

const Books = () => {
    return (
        <div>
            <div className='bg-[#13131310] rounded-2xl py-8 flex justify-center items-center mb-8'>
                <p className='font-bold text-[#131313] text-2xl'>Books</p>
            </div>
            <div className='flex justify-center items-center mb-14'>
                <button className='bg-[#23BE0A] rounded-lg btn text-white flex items-center '>Short By <MdKeyboardArrowDown className='text-2xl' />
                </button>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <ReadBook />
                </TabPanel>
                <TabPanel>
                    <WishBook />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;