import { Container } from "@mantine/core";

interface IUserInfoHeaderProps {
    coins: string | number;
}

function UserInfoHeader({ coins }: IUserInfoHeaderProps) {
    return (
        <Container style={{ color: 'red' }}>
            {coins}
        </Container>
    )

}
export default UserInfoHeader