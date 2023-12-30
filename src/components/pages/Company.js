import styles from './Company.module.css'

function Company() {
    return (
        <div className={styles.company_container}>
            <h1>Quem somos</h1>
            <div className={styles.linha}></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta purus a scelerisque fermentum. Proin fringilla, elit ac tempus consequat, mi leo laoreet elit, eget ullamcorper sapien ex ut quam. Morbi ut lorem vel orci tristique malesuada. Pellentesque at orci at est rhoncus tincidunt in eu diam. Aenean ut est mi. Cras diam urna, egestas sit amet blandit quis, fringilla laoreet lacus. Fusce rutrum congue lacus ut rhoncus.</p>

            <p>Ut sit amet ligula non erat tincidunt porta. Etiam in vestibulum arcu. Praesent in congue diam. Aenean egestas sapien vel luctus dictum. Suspendisse potenti. Donec non risus turpis. Maecenas ut massa quis turpis aliquet iaculis in ut leo. Quisque tempus cursus purus non ornare.</p>

            <p>Mauris porta maximus pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi arcu ligula, tincidunt quis neque sed, cursus vulputate dolor. Maecenas viverra eget sapien nec molestie. Sed molestie augue eget dui fermentum malesuada. Morbi vitae nisl dolor. Integer tempus consequat malesuada. Fusce sed pharetra lorem, nec sollicitudin augue.</p>

            <p>Praesent hendrerit erat non sapien consequat ultrices. Morbi sodales magna nulla. Donec commodo dolor blandit pretium volutpat. Suspendisse fringilla leo sit amet tortor luctus, sed tincidunt lectus aliquam. Suspendisse tincidunt velit ex, ac rutrum mauris tristique nec. Nullam convallis efficitur porttitor. Sed vestibulum porttitor nisi at dictum.</p>

            <p>Aenean felis odio, sollicitudin pellentesque condimentum quis, consequat nec eros. Sed ac nunc blandit, aliquet nisl in, vestibulum nisi. Maecenas bibendum vulputate purus, nec commodo nisl gravida et. Morbi viverra eros nunc, eu vehicula justo suscipit sit amet. Nullam porta nunc quis mollis cursus. Nullam cursus quam ligula, a consectetur velit fermentum ut. Cras vel vehicula velit.</p>
            <div className={styles.linha}></div>
            <br />
        </div>
    )
}

export default Company