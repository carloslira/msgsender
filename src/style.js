const style = {
    '@font-face': [
		{
			fontFamily: 'Signatra',
			src: 'url("/msgsender/Signatra.otf") format("opentype")'
		},
		{
			fontFamily: 'Signatra',
			src: 'url("/msgsender/Signatra.ttf") format("truetype")'
		}
	],
    wrapper: {
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2185B'
    },
    text: {
        color: 'white',
        fontSize: '100px',
        fontFamily: 'Signatra'
    }
};

export default style;