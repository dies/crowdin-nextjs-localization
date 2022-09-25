function Post(props) {
    const { entry, readMoreLabel } = props;

    const { title, content } = entry;

    return (
        <div>
            <div>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <span>{content}</span>
                </div>
                <br />
                <span style={{ textDecorationLine: 'underline', cursor: 'pointer' }}>
                    {readMoreLabel}
                </span>
            </div>
            <hr />
        </div >
    );
}

export default Post;
