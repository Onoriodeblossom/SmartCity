import React from 'react';

const  TableRow = ({...items}) =>{
  const {address:{house,street}, contact, date: {year, month, day, time},description, hosting, image, name} = items;
  return (
    <tr>
      <td>
        <div className="flex items-center w-[200px]">
          <img className="rounded-full w-fit"
          style={{width:'50px', height: '50px'}}
            src={image} alt="user" />
          <div className="ml-2">
            <h2 className="  text-sm text-[#252733]">{name}</h2>
            <p className="text-sm text-[#C5C7CD]">
                {description}
              </p>
          </div>
        </div>
      </td>
      <td className="text-sm">{contact}</td>
      <td>
        <span className="text-sm text-[#252733]">{house}</span><br/>
        <span className="text-[13px] text-[#C5C7CD]">{street}</span>
      </td>
      <td>
        <span className="text-sm text-[#252733]">{`${month} ${day} ${year}`}</span><br/>
        <span className="text-[13px] text-[#C5C7CD]">{time}</span>
      </td>
      <td> <span className="bg-[#2131C2] text-[12px] py-1 px-3 rounded-full text-white cursor-pointer"> CONTACT</span></td>
      <td className="text-sm">{hosting? 'YES': 'NO'}</td>
    </tr>
  );
}

export default TableRow;