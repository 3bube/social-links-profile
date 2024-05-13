
function SocialProfileLinks() {
    const imgUrl = 'pictures/avatar-jessica.jpeg';
    const listItems = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

    return (
        <div className="container">
            <div className="card">
            <img src={imgUrl} alt="" />
            <h3>Jessica Randall</h3>
            <h5>London, United Kingdom</h5>
            <span>"Front-end developer and avid reader"</span>

            <ul>
                {listItems.map((items, index) =>
                <li key={index}>{items}</li>
                )}
            </ul>
            </div>
        </div>
    )
}

export default SocialProfileLinks