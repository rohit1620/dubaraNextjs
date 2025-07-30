

const DynamicMetaData = () => {
  return (
    <div>
        {/* <title>Dynamice Metadata</title> */}
      <h1>Hello meta data</h1>
    </div>
  )
}

export default DynamicMetaData;

export function generateMetadata(){
    return{
        title:"my last project",
        description:"I am going to take sanyas"
    }
}
