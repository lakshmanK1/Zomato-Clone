import React from 'react'

// Styled Cmps
import { FirstDiv, SecondDiv, ThirdDiv,FourthDiv,FifthDiv, Image } from './StyledCmp';

const tabs = [
    {
      id: 1,
      name: "Delivery",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "#FCEEC0",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: "DiningOut",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "#E5F3F3",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: "NightLife",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#EDf4FF",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];

function TabOptions(props) {
  return (
    <FirstDiv>
        <SecondDiv>
            {tabs.map((data) => (
                <ThirdDiv onClick={()=>props.setTabActive(data.name)}>
                <FourthDiv style={{ backgroundColor: `${props.tabActive === data.name ? data.backdrop : ''}` }}>
                    <Image src={props.tabActive === data.name ? data.active_img : data.inactive_img} />
                </FourthDiv>
                <FifthDiv style={{color:`${props.tabActive === data.name ? 'red' : 'rgb(105, 105, 105)'}`}}>{data.name}</FifthDiv>
                </ThirdDiv>
            ))}
        </SecondDiv>
    </FirstDiv>
  );
}

export default TabOptions