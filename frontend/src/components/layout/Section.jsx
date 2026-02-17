const Section = ({children,id,className = ""})=>{
    return(
        <section 
            id={id}
            className={`py-20 lg:py-32 px:6 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </section>
    )
};

export default Section;
 