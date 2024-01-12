import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="navbarElements">
            {['ALL', 'PIANOS', 'GUITARS', 'DRUMS AND PERCUSSION', 'KEYBOARDS', 'STUDIO / DJ', 'EFFECTS', 'AMPLFIERS', 'STRINGS', 'BREATHINGS', 'DUBBING', 'HI-FI', 'LESSONS']
            .map(category => <Filter category={category}/>)}
        </div>
    )
}

export default AllCategories;