INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_genre (name) VALUES ('Action');
INSERT INTO tb_genre (name) VALUES ('Comedy');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Fantasy');
INSERT INTO tb_genre (name) VALUES ('Thriller');

INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Matrix', 'Parte 1', 1999, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Matrix Reloaded', 'Parte 2', 2003, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTGg4gT6yBAxm6bskTkOjdRsbit.jpg', 'Após derrotar as máquinas em seu combate inicial, Neo ainda vive na Nabucodonosor ao lado de Morpheus, Trinity e Link, o novo tripulante da nave.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('O Senhor dos Anéis', 'A Sociedade do Anel', 2001, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tlvsNCwWEIgwAM23aNzTmMIcPEZ.jpg', 'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal.', 4);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Jornada nas Estrelas', '1', 1966, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f2wbC7fxiOJqzTb6HPr4N6bsjLF.jpg', 'O imperturbável Cap. James T. Kirk leva a icônica e intergalática tripulação da USS Enterprise nesta série pioneira sobre a exploração espacial.', 4);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Destruição Final: O Último Refúgio', 'Greenland', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sJecw4UYpvTgKE2zS9le44Nwuag.jpg', 'Quando cientistas descobrem que um cometa atingirá a Terra em poucos dias e provavelmente causará a extinção da humanidade, uma família tenta cruzar o país para chegar a sua única esperança de sobrevivência: um grupo de abrigos subterrâneos em Greenland.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Soul', 'Soul', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg', 'Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Estranho Passageiro', 'Sputnik', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tBi5xW9Rd0YoGB0aAggV0EN5LDP.jpg', 'URSS, 1983. O herói cosmonauta soviético Vladimir Veshnyakov traz uma criatura alienígena para a terra... em seu próprio corpo.', 5);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Mulher-Maravilha', '1984', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AweDlIiohqw4sjC7gCsPVd1zo77.jpg', 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.', 4);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Violação', 'Nas profundezas do espaço, eles não estão sozinhos.', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/JmtaGCYsTv484MByG2AqmVqNcf.jpg', 'À beira da paternidade, um mecânico júnior a bordo de uma arca interestelar para a Nova Terra deve superar um terror cósmico malévolo com a intenção de usar a nave espacial como uma arma.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Url, synopsis, genre_id) VALUES ('Os Croods 2', 'A sobrevivência que lute.', 2020, 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vRTScutueW9gLF3dSo2Za7o0v7n.jpg', 'Os Croods 2: Uma Nova Era é uma aventura sobre uma família pré-histórica que descobre as transformações no mundo enquanto tenta permanecer unida.', 2);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Vale a pena ver a trilogia',1,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Já é um clássico. Ansioso pelo 4',1,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Foi um dos melhores filmes que eu já vi',3,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Razoavel',5,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('A historia é interessante',6,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Curti',8,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Não me assustou',7,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('É um bom filme de animação',10,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Mediano',9,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Um clássico da ficção',4,1);





