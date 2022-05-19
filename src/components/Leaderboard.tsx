import { Table, Avatar, Container, Text, MantineProvider, SimpleGrid, Card, Image, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface ILeaderboardsProps {
    elements: any[];      
}

function Leaderboard({ elements }: ILeaderboardsProps) {
    

    let place = 0;
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{place += 1}</td>
            <td>{<Avatar />}</td>
            <td>{element.name}</td>
            <td>{element.points}</td>           
            {place == 1 ?
            <td><Image src='https://lh3.googleusercontent.com/iHAgkwxoTsHOXdYgH8Dt4Um82OhnCLcweKV4B1XEP2TXgtOKFsRKs9-KJ1j5_uCZNp42bBFDRNmAXbeRJhttvb-Cnvt1AksWCQmMAZhCgLyDGjDpX1NFLRaoVeWsRUuseWk35O18xP-s1yQHF0wy0oMx7Ieb_jEOiEXk3qgo3urB7RcWhUoBEDTtss8Nz7JGOoDLLLqJCZNjEAq-BMSgVZ3_KS5aZSV5m_vwbpRLEomvtQ9scMPxQHDT2KIXz3cpoqTStsew8DmlS-DJvZNcp0gI4t9OgnFlBUi9DuKtmrJs3IBVvhOTZ5B0Qq-ZOqqKqbCeLxV-p5sOUzj75Pmeeg_OavFC3U4TO1kbd51UhycAqNEByTg7XrxbF27f_KKC3e8nJ4-IAXRiXf-fJ_9QsaskYF9yLcnE_WkOj1vs5fP0tbLXHvcU_rdlGdO99o4Faru9brWdHFj71uw5drbPBOr5niA_JGCLeDhXftITWbRccXY5IqDPh-WPSaplJ3VlfN_O3LwZsp-kORilUIpjvToaatBJnlK5MpCWz7RN6G8KOIYFYURV-qrGgVsF6egWgE9isu-095KP0ni_j3Rrefu3IuktpIepOyKZslLw31JNkQwWeL_4sUOJ_UZFhKVIpgWAhVGQtLuYR4-_ZLs-SkOpqAyLBN5XDTOvL7ufaRK58cpPldTMiYfaynJivlEvZgBlf3a9qF8JzCjryIhk1MKF75MDZ3HWatVfYnu2MfOWWCKVsfT-jb3UOvj7GQ=w349-h530-no?authuser=0'></Image></td>
            : place== 2 ? <td><Image src='https://lh3.googleusercontent.com/xWOCjJ94JkBSlvA7HhYuDpi6yFPc7X-vbaWO4vEHmbmVOpi4kRkiIvP8cXeAwmF88OCw6eZIlo81Md-QyTStcxDWmPUJFz-iBnFzC-WOCNwcVqwFvGwcY3hHlL5atiyXPm6NOYgz-8oA1MolCp77BL2XhhACVLjN1Kew3Ys12y6BK1nKqUe8E3pZ_dMw-r3aMgw35d7xdzajblgMndjnEcyyrceUZp2m4bzpewjdjuKkTr_OOxaaFBeRL8BXjlFpWntIwGiT7YwPnSE9z0c0jXQx0bu2hQ2oEUfZ0_OcUhssIuqfImqK-xLt6qsXMFDA8MQjYbDbpBkf65FBZMeS9DU1lHwDasIpz5ev62xVOfAIfkU9yMG2pFO37GbPUtpLcVUV6Oopk4hOk_xv7n_Sh0sr2r0LZqZygb6s4Ju5LEjDxmS6FUg1hzB_Dxjdhlg1BkzkdOnnmV8MWMMyif6gxpclCSOVCNwn9HQ_u4k3q639HqfYC2RCv5NVbZceOh7kq_8UA4LudufQt2tMdSgCdimZK1vgeWFM8EGNft-2zFbV-5lakQp2O4sxBAA8KxXw7aYiTPKge8fgf6ymhl2ou1921NT9nn0ySAuLTOhep-2HNEcEQ0hb6HLL_mP6wW_5T9vhIZKHpAxfEbpgW9wT8Ko7lWlTZjQRfhsNdZd8Wmc2hEEz9fSBn6BvjUJTobKwPYOc_xBqbfwbkvr5G57ASkGqaz3_U9gX1S1ZvfxVAqflp0hYWM7992Ja4C5KGA=w303-h531-no?authuser=0'></Image></td>
            : place == 3 ? <td><Image src='https://lh3.googleusercontent.com/OUthTGsbpBSd-fTA3R8WdJFUPU89tGWWurvicYwZjVjmdWfrAehuOWCKPSsxP61K83dvdwFXXp41BZ8RX9Gd8MEh303vwu6i35gGY_hzSKyOPwylLY6KT6FH07CPIEXRjSS6aa0VLN-uq7QuaoenUmWxuZ92I21eIrU48MxLjrFiwNn3T251f1VtA5AqF5sXhZQW-mnNZqpp-QQprtzSqzdXoDrejbIaimi3bSDOIQCqVtwAe8d44n2wDj0hvoluOqdAERwe0xM3R1HuT6eOtNyIrn88rkygOVZp6p5Bk2hG67PNysBGbLbDphln4Jy0OBqYCAhwPqy_VgTxjBk3Nvp2DzbgK1cvSWkQQW1QdezGS343Zv8PFGbfL9oO0ncIQLyM_qpnkNNJ3Q--cHpctGyl4nElh1X6RvBf8frozNtUTAgur5FlPqkWDWSFCSSuoONkiX83wcbCCXNlkFxccavnfDLcsHF_nucsJK1dv7ow8J2iDUXtOuvtzptIQ62sSmKFgoGuwolpHiNDdJdFEJ14o0IaacqWg74mdHeE34-9RvvLKsvw0xr6VAcG48TH0I1VmdfvBQqWJLWRAtxytNb7U7x-cY4tyVAG6vnQamHP9aKIGD6erxxB9qUhGyJbTXrSaz0ajrUS_u-Fne7cgXOQybddNmBowOpcKtJu2UzyStONWIT_PsYh7xRuisI8cYj2RPbCXvl1kOJZpdgKOpZyj9C4N4csvldjYeEID0u7DyKJFW7_BtpU-JmewQ=w307-h535-no?authuser=0'></Image></td>
            : <td>Any</td>}
            </tr>                                            
        
    ))
    return (
        <Container style={{height:500, width:300}}>
            
            <Text align='center' weight={700}>Leaderboard</Text>
            <Table verticalSpacing="xs" striped>
                <thead>
                    <tr>
                        <th>Top #</th>
                        <th colSpan={2}>User</th>
                        <th>Coins</th>
                    </tr>
                </thead>
                <tbody>                
                    {rows}
                </tbody>
            </Table>
        </Container>

    );
}

export default Leaderboard