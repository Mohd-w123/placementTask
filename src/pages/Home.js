import {Input,Row,Col,Button,Table} from 'antd'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Home=()=>{
    const {Search}=Input
    const [number,setNumber]=useState();
    const [data,setData]=useState("");
    
    const [result,setResult]=useState([]);
    const [searchValue,setSearchValue]=useState('');

    const handleChange=(e)=>{
        e.preventDefault(); //disbale page referesh behaviour of buttons
        setNumber(e.target.value)
    }

    useEffect(()=>{
         axios.get("https://raw.githubusercontent.com/invictustech/test/main/README.md").then(res=>setData(res.data))
    },[])

    const handleSubmit=async()=>{
        if(!number) return; // not a valid entry then do not go further
        setNumber() //clear the search textbox
        
        const finalResult=await findResult(data,number) //calling function to find frequent words
        console.log(finalResult)
        let tempArr=[];
        console.log(finalResult)
        let temp=finalResult.map((s)=>{
           tempArr.push({wordname:s[0],occurence:s[1]});
       })
       console.log(tempArr)
       setResult(tempArr)
     
         
    }
    const findResult = (str = '', num = number) => {
        const strArr = str.split(/\W+/); //split the every word of array into string
        const map = {};
        strArr.forEach(word => {
           if(map.hasOwnProperty(word)){
              map[word]++;
           }else{
              map[word] = 1;
           }
        });
        const resultedArr = Object.keys(map).map(key => [key, map[key]]); //change map data to array
        resultedArr.sort((a, b) => b[1] - a[1]); //sort array on basis of number of occurences
        return resultedArr.slice(0, num).map(el => el);//return the result acc to number user passing
        
        

     };
     const handleSearch=e=>setSearchValue(e.target.value)

    const searched = (keyword) => (d) => {
        return (
          d.wordname.toLowerCase().includes(keyword) 
        );
      };

     const dataSource =result && result.filter(searched(searchValue.toLowerCase())).map((d,i)=>{
         return{
             key:i,
             wordname:d.wordname,
             occurence:d.occurence
         }
     })
     const columns = [
        {
          title: 'Word Name',
          dataIndex:'wordname',
          key:'wordname'
        },
        {
          title: 'Occurence',
          dataIndex: 'occurence',
          key: 'occurence',
        },]
    return(
        < >
        <div className="container">
        <Row justify="center">
            <Col span={24} lg={24} className="mt-4">
                <h1 className="text-center">Welcome !</h1>
                <div className="col-md-6" style={{margin:"auto"}}>
                <Input size="large" placeholder="Enter a number" value={number} onChange={handleChange}  />
                <Button size="large" className="mt-3" block  onClick={()=>handleSubmit()} >Submit</Button>
                </div>
            </Col>
            <Col span={24} lg={24} className="mt-5">
            <Search
                            placeholder="Enter word to find"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onChange={handleSearch}
                           className="col-md-6"
                            // className="searchBox"
                            />
                    
           { result && <Table className="mt-5" dataSource={dataSource} columns={columns} pagination={true} />} 

            </Col>
        </Row>
        </div>
        
        </>
    )
}
export default Home
