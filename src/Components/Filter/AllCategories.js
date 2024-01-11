import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="navbarElements">
            {['PIANOS', 'GUITARS', 'DRUMS AND PERCUSSION', 'KEYBOARDS', 'STUDIO / DJ', 'EFFECTS', 'AMPLFIERS', 'STRINGS', 'BREATHINGS', 'DUBBING', 'HI-FI', 'LESSONS', 'All']
            .map(category => <Filter category={category}/>)}
        </div>
    )
}

export default AllCategories;