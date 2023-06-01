import {useState} from 'react';

const Search = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event) => {
        const {value} = event.target;
        setInputValue(value);
        console.log(inputValue)
    }

    return (
        <div>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipe">
                            Search recipes
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="recipe" type="text" value={inputValue} onChange={handleInputValue} placeholder=""></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full max-w-xs">
                {inputValue}
            </div>
        </div>
    )

}

export default Search