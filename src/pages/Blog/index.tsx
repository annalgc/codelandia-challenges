import React, { useState } from 'react';
import { 
    Container, 
    Header, 
    Heading, 
    Text, 
    InputWrapper, 
    Content, 
    ListPosts 
} from './styles';

import InputSearchIcon from '../../assets/icons/input-search.svg';

import { mock } from './mock';
import Post from '../../components/Post';

const Blog: React.FC = () => {
    const [search, setSearch] = useState<string>('');

    return (
        <Container>
            <Header>
                <Heading>
                    <Text>Codelândia</Text>
                    <Text>blog</Text>
                </Heading>

                <InputWrapper>
                    <img src={InputSearchIcon} alt="Search Icon" />
                    <input className="iw__input" placeholder="Pesquise no blog" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                </InputWrapper>
            </Header>

            <Content>
                <ListPosts>
                    {search ? (
                        mock.filter(item => search.length >= 2 ? item.title.substring(0, 2) === search.substring(0, 2) : item.title.substring(0, 1) === search.substring(0, 1)).map(item => (
                            <Post post={item}/>
                        ))
                    ) : (
                        mock.map(item => (
                            <Post post={item} />
                        ))
                    )}
                </ListPosts>
            </Content>
        </Container>
  );
}

export default Blog;