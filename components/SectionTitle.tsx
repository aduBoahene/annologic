interface SectionTitleProps{
    title: string
}


export function SectionTitle({title}: SectionTitleProps) {
return(
    <div className="p-4 md:w-[80%] md:mx-auto md:mt-12">
        <h3 className="text-2xl md:text-4xl font-bold" style={{fontFamily:'Montserrat-Bold'}}>{title}</h3>
    </div>
)

}