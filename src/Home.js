import { useState , useEffect } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

// let name = "omnia"

// const [name,setName] = useState("omnia");

// const [age, setAge] = useState(25)

//     const handleClick = (e)=> {
//         console.log("hello ninjas" , e);
//         setName("mony")
//         setAge(28)
//     }

//     const handleClickAgain = (name,e)=> {
//         console.log("hello "+name);
//         console.log(e.target);
//     }

    // const [blogs,setBlogs]=useState([
    //     {title:"blog1" , body:"blog1 body" , author:"author" , id:1},
    //     {title:"blog2" , body:"blog2 body" , author:"blog2 author" , id:2},
    //     {title:"blog3" , body:"blog3 body" , author:"author" , id:3}
    // ])

    // const handleDelete = (id)=>{
        //const newBlogs = blogs.filter((blog)=> blog.id != id)
      //  setBlogs(newBlogs)
    // }

    //useEffect is used to run a function ; fires on every render (when useState changes it renders the template), can be used ti fetch data .. do authentication
    //second agument is dependency array (if we do not to run useEffect after every single render) , empty array means to run only when first render only
    
    const {data:blogs , isPending,error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {/* <h2>Home page</h2> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain("mario",e)}>Click me again</button> */}

            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))} */}
            {error &&  <div>{error}</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author == "author")} title="omnia's blogs!"/>}

            {/* {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author == "author")} title="omnia's blogs!" handleDelete={handleDelete}/>} */}
        </div>
     );
}
 
export default Home;