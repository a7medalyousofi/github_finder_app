function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='py-4 text-center bg-ternary_d_bg text-main_d_text'>
            <p>Copyright &copy; {currentYear} All right reserved.</p>
        </div>
    )
}

export default Footer
