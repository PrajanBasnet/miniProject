const GenderCheckBox = () =>{
    return(
        <div className="flex">
            <div className="from-control">
               <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900"/>
                </label> 
            </div>
            <div className="from-control">
               <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900"/>
                </label> 
            </div>
        </div>
    );
};

export default GenderCheckBox;