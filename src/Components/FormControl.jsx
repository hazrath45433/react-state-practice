import React from "react";

class FormControl extends React.Component{
    state = {
        fontFamily : "Monserat",
        fontSize : 15,
        fontWeight: "400",
        tranform : "uppercase",
        style : "none",
        decoration : "underline",
        height : 7,
        lspacing : 3,
        wspacing : 5
    }
    fontSizeHandle = (e)=> {
        this.setState({
            fontSize : e.target.value,
        });
    }
    heightHandle = (e)=> {
        this.setState({
            height : e.target.value,
        });
    }
    lspacingHandle = (e)=> {
        this.setState({
            lspacing : e.target.value,
        });
    }
    wspacingHandle = (e)=> {
        this.setState({
            wspacing : e.target.value,
        });
    }
    fontWeightHandle = (e)=> {
        this.setState({
            fontWeight: e.target.value,
        });
    }
    fontFamilyHandle = (e)=> {
        this.setState({
            fontFamily: e.target.value,
        });
    }
    tranformHandle = (e)=> {
        this.setState({
            tranform: e.target.value,
        });
    }
    decorationHandle = (e)=> {
        this.setState({
            decoration: e.target.value,
        });
    }
    styleHandle = (e)=> {
        this.setState({
            style: e.target.value,
        });
    }
    render(){
        const{ fontFamily, 
            fontSize,
            fontWeight,
            tranform,
            style, 
            decoration, 
            height, 
            lspacing, 
            wspacing } = this.state;
        let myStyle = {
            fontSize: fontSize+"px",
            fontWeight: fontWeight,
        }
        return(
            <div>
                <h1 className="font-bold underline" style={myStyle}>
                    This is a test project. This project is abuot to Control the react state. And I am trying.
                </h1>
                <div className='bg-black'> Hello How are you? This is Hazrath Ali. I add some features( but not all) to 
                decorate the above text. Please tune that</div>
                <form className="form-style"> 
                    <label className="family">
                        Font Family
                        <select name="family"  value={fontFamily} onChange={this.fontFamilyHandle}>
                            <option value="Arrial">Arrial</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Monserat">Monserate</option>
                        </select>
                    </label>
                    <label className="size">
                        Font Size
                        <input type="range" value={fontSize} onChange={this.fontSizeHandle}/>
                        <input type="number" value={fontSize} onChange={this.fontSizeHandle}/>
                    </label>
                    <label className="weight">
                        Weight
                        <select name="weight"  value={fontWeight} onChange={this.fontWeightHandle}>
                            <option value="200">200(Light)</option>
                            <option value="400">400(Normal)</option>
                            <option value="500">500(Bold)</option>
                            <option value="600">600(Xtra Bold)</option>
                        </select>
                    </label>
                    <label className="Transform">
                        Transform
                        <select name="transform"  value={tranform} onChange={this.tranformHandle}>
                            <option value="lowercase">Lowercase</option>
                            <option value="uppercase">Uppercase</option>
                            <option value="capitalize">Capitelize</option>
                        </select>
                    </label>
                    <label className="style">
                        Style
                        <select name="style"  value={style} onChange={this.styleHandle}>
                            <option value="none">None</option>
                            <option value="rotate">Rotate</option>
                            <option value="translate">Translate</option>
                        </select>
                    </label>
                    <label className="decoration">
                        Decoration
                        <select name="decoration"  value={decoration} onChange={this.decorationHandle}>
                            <option value="overline">Overflow</option>
                            <option value="line-through">Line-through</option>
                            <option value="underline">Unerline</option>
                        </select>
                    </label>
                    <label className="hight">
                        Line Height
                        <input type="range" min="0" max="12" value={height} onChange={this.heightHandle}/>
                        <input type="number" min="0" max="12" value={height} onChange={this.heightHandle}/>
                    </label>
                    <label className="lspacing">
                        Letter Spacing
                        <input type="range" min="-5" max="20" value={lspacing} onChange={this.lspacingHandle}/>
                        <input type="number" min="-5" max="20" value={lspacing} onChange={this.lspacingHandle}/>
                    </label>
                    <label className="wspacing">
                        Word Spacing
                        <input type="range" min="-5" max="20" value={wspacing} onChange={this.wspacingHandle}/>
                        <input type="number" min="-5" max="20" value={wspacing} onChange={this.wspacingHandle}/>
                    </label>
                </form>
            </div>

        )
    }
}

export default FormControl;