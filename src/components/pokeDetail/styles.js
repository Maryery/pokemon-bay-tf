import styled from '@emotion/styled';

export const PokeDetailWrapper = styled.div`
	background-color: #DCDCDC;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	width: 400px;
	height: 500px;
	margin-left: auto;
	margin-right: auto;
`;

export const PokeImage = styled.div`
	margin-left: auto;
	margin-right: auto;
	@media (min-width: 768px) {
		display: inline-block;
		margin-top: 50px;
	}
`;

export const PokeDetailsImage = styled.img`
	width: 150px;
	height: 150px;	
	@media (min-width: 1000px) {
		width: 150px;
		height: 150px;
	}
`;

export const Link = styled.a`
	color: grey;
	font-size: 15px;
	font-weight: bold;
	text-decoration: none;
`;

export const PokeName = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 15px;
	margin-left: 10px;
	margin-top: 10px;
	margin-bottom: 50px;
`;

export const PokeOrder = styled.span`
	color: white;
	font-size: 15px;
	font-weight: bold;
	float: left;
`;

export const PokeOrderValue = styled.div`
	color: #212121;
	font-size: 15px;
	font-weight: bold;
`;

export const PokeDetails = styled.section`
	display: flex;
	flex-direction: column;
	width: auto;
	height: auto;
	@media (min-width: 768px) {
		flex-direction: row;
		width: auto;
		height: 500px;
	}
`;

export const PokeDetailsRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #30a7d7;
	border-radius: 15px;
	margin-top: 50px;
	margin-bottom: 76px;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		background-color: #30a7d7;
		border-radius: 15px;
		float: right;
		width: 200px;
	}
`;
export const PokeTitle = styled.span`
	color: white;
	font-size: 15px;
	font-weight: bold;
	float: left;
`;
export const PokeValue = styled.div`
	color: #212121;
	font-size: 15px;
	font-weight: bold;
`;
export const SkillsContainer = styled.ul`
	flex-direction: row;
	widht: 200px;
	height: 150px;
	margin-top: 0px
	margin-bottom: 25px;
	padding-left: 10px;
	padding-right: 10px;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0px
		margin-bottom: 25px;
		padding-left: 10px;
		padding-right: 10px;
		margin-right: auto;
		margin-left: auto;
	}	
`;
export const Skills = styled.li`
	list-style: none;
	margin-top: 15px;
`;

export const SkillsList = styled.li`
	list-style: none;
	margin-top: 15px;
	color: white;
	font-size: 15px;
	font-weight: bold;
`;

export const SkillsItem = styled.div`
	width: auto;
	color: #212121;
	font-weight: bold;
`;