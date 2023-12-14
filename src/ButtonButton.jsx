const ButtonButton = ({link,title,icon}) => {
    return (
        <a target="_blank" rel="noreferrer" href={link} className='flex items-center justify-center rounded py-2 px-3 border-2 border-purple-700 hover:bg-purple-700'>
            <span className='flex gap-2 items-center'>
                <span className="text-white">{icon}</span>
                <span className='font-semibold text-white'>{title}</span>
            </span>
        </a>
    );
};

export default ButtonButton;