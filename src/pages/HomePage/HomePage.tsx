import { observer } from "mobx-react-lite"
import { ProfileBlock } from "../../widgets/ProfileBlock/ProfileBlock"
import { Navigation } from "../../widgets/Navigation/Navigation"
import Container from '@mui/material/Container';

export const HomePage = observer(() => {
    return (
        <section className="home">
            <Container maxWidth="sm">
                <ProfileBlock/>
                <Navigation/>
            </Container>
        </section>
    )
})