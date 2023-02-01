import Link from 'next/link'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import { HexColorPicker } from "react-colorful";
import { useEffect, useState } from 'react';

const Nick = () => {
    const [firstColor, setFirstColor] = useState("#ff8700");
    const [secondColor, setSecondColor] = useState("#fffa00");
    const [firstColorInput, setFirstColorInput] = useState("#ff8700");
    const [secondColorInput, setSecondColorInput] = useState("#fffa00");
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [overline, setOverline] = useState(false);
    const [name, setName] = useState("Pelinimi");
    const [stylizedName, setStylizedName] = useState("");
    const [stylizedHTMLName, setStylizedHTMLName] = useState([]);
    const [long, setLong] = useState(false);

    const changeColor = (value, setFunction, setInput) => {
        if(/^#[0-9A-F]{6}$/i.test(value)) {
            setFunction(value);
        }
        setInput(value.toLowerCase());
    }

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return (hex.length == 1 ? "0" + hex : hex).replace("-", "0");
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(Math.round(r)) + componentToHex(Math.round(g)) + componentToHex(Math.round(b));
    }

    useEffect(() => {
        let length = name.length;
        let   r1 = parseInt(firstColor.slice(1, 3), 16),
              g1 = parseInt(firstColor.slice(3, 5), 16),
              b1 = parseInt(firstColor.slice(5, 7), 16);
        const r2 = parseInt(secondColor.slice(1, 3), 16),
              g2 = parseInt(secondColor.slice(3, 5), 16),
              b2 = parseInt(secondColor.slice(5, 7), 16);
        const redStep = (r2 - r1) / (length - 1),
              greenStep = (g2 - g1) / (length - 1),
              blueStep = (b2 - b1) / (length - 1);

        let newName = "";
        let htmlName = [];
        for(let character of name) {
            const hexColor = rgbToHex(r1, g1, b1);
            let modifiedCharacter = "&"
                + hexColor
                + character;

                if(bold) {
                modifiedCharacter = "&l" + modifiedCharacter;
            }
            if(italic) {
                modifiedCharacter = "&o" + modifiedCharacter;
            }
            if(overline) {
                modifiedCharacter = "&m" + modifiedCharacter;
            }
            if(underline) {
                modifiedCharacter = "&n" + modifiedCharacter;
            }
            newName += modifiedCharacter;
            htmlName.push(<span style={{
                fontStyle: italic ? "italic" : "normal",
                textDecoration: ((overline ? "line-through " : "") + (underline ? "underline" : "")),
                fontWeight: bold ? "bold" : "normal",
                color: hexColor
            }}>{character}</span>);

            r1 += redStep;
            g1 += greenStep;
            b1 += blueStep;
        }
        setStylizedName(newName);
        setStylizedHTMLName(htmlName);
        setLong(newName.length + 6 >= 255);
    }, [firstColor, secondColor, bold, italic, underline, overline, name]);

    return (
        <Layout
            title="Nimigeneraattori"
            description="Nimigeneraattori, joilla voit luoda värityksen minecraft-nimeesi"
        >
            <Heading
                heading="Nimigeneraattori"
                lead='Generoi hienot värit pelinimeesi täällä'
            />
            <div className='nameStylized' style={{color: "white", backgroundColor: "#00000099"}}>
                {stylizedHTMLName}
            </div>
            {long ?
            <div className='nameStylized' style={{color: "red"}}>
                 Liian pitkä
            </div>
             : undefined}
            <div className='colorContainer'>
                <div className='modifier'>
                    <HexColorPicker color={firstColor} onChange={value => changeColor(value, setFirstColor, setFirstColorInput)} />
                    <label htmlFor='firstColor'>Start color</label>
                    <input type="text" id="firstColor" value={firstColorInput} onChange={(e) => changeColor(e.target.value, setFirstColor, setFirstColorInput)}/>
                </div>
                <div className='modifier'>
                    <HexColorPicker color={secondColor} onChange={value => changeColor(value, setSecondColor, setSecondColorInput)} />
                    <label htmlFor='secondColor'>End color</label>
                    <input type="text" id="secondColor" value={secondColorInput} onChange={(e) => changeColor(e.target.value, setSecondColor, setSecondColorInput)}/>
                </div>
                <div className='modifier'>
                    <div>
                        <input type="checkbox" id="bold" checked={bold} onChange={e => setBold(e.target.checked)}/>
                        <label htmlFor='bold'>Lihavointi</label>
                    </div>
                    <div>
                        <input type="checkbox" id="italic" checked={italic} onChange={e => setItalic(e.target.checked)}/>
                        <label htmlFor='italic'>Kursiivi</label>
                    </div>
                    <div>
                        <input type="checkbox" id="overline" checked={overline} onChange={e => setOverline(e.target.checked)}/>
                        <label htmlFor='overline'>Yliviivaus</label>
                    </div>
                    <div>
                        <input type="checkbox" id="underline" checked={underline} onChange={e => setUnderline(e.target.checked)}/>
                        <label htmlFor='underline'>Alleviivaus</label>
                    </div>
                </div>
            </div>

            <div className="nameInput">
                <label htmlFor='name'>Nimi</label>
                <input type="text" id="name" value={name} maxLength={16} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="nameInput">
                <label htmlFor='output'>Väritetty nimi</label>
                <input type="text" id="output" value={stylizedName} readOnly={true}/>
                <label htmlFor='outputCommand'>Komento serverille</label>
                <input type="text" id="outputCommand" value={`/nick ${stylizedName}`} readOnly={true}/>
            </div>
        </Layout>
    )
}

export default Nick
