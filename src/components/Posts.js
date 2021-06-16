
const Posts = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>{data.fields.title}</h1>
            <p>{data.fields.excerpt}</p>
        </div>
    );
};

export default Posts;
