const ButtonButton = ({link,title,icon}) => {
    return (
        <a href={link} className='flex items-center w-28 justify-center rounded-lg border-2 border-purple-700 p-1'>
            <span className='flex gap-2 items-center'>
                {icon}
                <span className='font-semibold'>{title}</span>
            </span>
        </a>
    );
};

export default ButtonButton;