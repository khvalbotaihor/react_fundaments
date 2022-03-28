import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search"
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value:'title',name:'Sort by name'},
                    {value:'body',name:'Sort by description'},
                ]}
                defaultValue="Sort"
            />
        </div>
    );
};

export default PostFilter;
