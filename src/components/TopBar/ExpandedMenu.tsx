import { FC } from 'React';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 240px;
    top: 24px;
    background: rgba(143, 143, 143, 0.5);
    padding: 10px;
    z-index:1;

    li{
        padding: 5px;
    }
`;

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>Text 1</li>
                <li>Text 2</li>
                <li>Text 3</li>
                <li>Text 4</li>
                <li>Text 5</li>
            </ul>
        </Wrapper>
    );
};