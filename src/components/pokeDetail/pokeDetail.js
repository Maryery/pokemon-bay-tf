import React from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

const PokeDetail = ({ data }) => {
	let { name } = useParams();
	const filteredPokemons = data.filter((pokemon) => {
		return pokemon.name === name;
	});

	return filteredPokemons[0] !== undefined ? (
		<S.PokeDetailWrapper>
			<S.PokeName>
				{' '}
				{filteredPokemons[0].name}
				<S.Link href="/">X</S.Link>
			</S.PokeName>
			<S.PokeDetails>
				<S.PokeImage>
					<S.PokeDetailsImage src={filteredPokemons[0].image} alt="pokemon"></S.PokeDetailsImage>
				</S.PokeImage>
				<S.PokeDetailsRight>
						<S.SkillsContainer>
							<S.Skills>
								<S.PokeOrder>Número</S.PokeOrder>
								<S.PokeOrderValue>{filteredPokemons[0].order}</S.PokeOrderValue>
							</S.Skills>
							<S.Skills>
								<S.PokeTitle>Altura</S.PokeTitle>
								<S.PokeValue>
									{filteredPokemons[0].height}
								</S.PokeValue>
							</S.Skills>
							<S.SkillsList> Habilidades
									{filteredPokemons[0].abilities.map((ability, index) => (
										<S.SkillsItem>{ability}</S.SkillsItem>
									))}
							</S.SkillsList>
						</S.SkillsContainer>
				</S.PokeDetailsRight>
			</S.PokeDetails>
		</S.PokeDetailWrapper>
	) : (
		<p>POKEMON NOT FOUND</p>
	);
};

export default PokeDetail;
