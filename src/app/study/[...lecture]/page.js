'use client'
export default function lecture({params})
{
    console.log(params)
    return(
        <div>
            <h1>All lecture of College</h1>
            <h1>{params.lecture[0]}</h1>
        </div>
    )
}