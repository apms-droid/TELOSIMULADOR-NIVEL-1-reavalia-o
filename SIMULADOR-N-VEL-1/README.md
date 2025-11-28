Simulator Télos - Nível 1 (Versionamento Semântico, GIT, JSON & Javascript)
Sejam muito bem-vindos ao Simulator - Nível 1! Neste nível você teve a oportunidade de aprender sobre Versionamento Semântico, GitHub, GIT, Configuração de Ambiente Dev, Introdução ao JavaScript, Funções, Manipulação de Arrays e Objetos,JSON e Promises.

SIMULADOR NÍVEL 1 - Atividades
1) História de Usuário 1: Recebimento e Exibição de Dados do Governo.
Descrição: Como membro da equipe financeira, desejo receber e exibir os dados dos repasses do governo, para acompanhar as transações efetuadas.

Critérios de aceitação:

➢ A quantidade total de repasses no arquivo deverá ser exibida no console.
➢ Exemplo: Total de repasses processados: 30
2) História de Usuário 2: Análise de Transações por status.
Descrição: Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo.

Critérios de aceitação:

O sistema deverá exibir um resumo dos repasses bem sucedidos. Esse resumo deve ter as seguintes informações:

a. Quantidade total de repasses bem sucedidos;
b. Quantidade total de repasses bem sucedidos por órgão;
c. Valortotal de repasses bem sucedidos;
d. Valor total de repasses bem sucedidos por órgão.
2. O sistema deverá exibir um resumo dos repasses com falha. Esse resumo deve ter as seguintes informações:
a. Quantidade total de repasses com falha;
b. Quantidade total de repasses com falha por órgão;
c. Quantidade total de repasses com falha por motivo;
d. Valortotal de repasses com falha;
e. Valor total de repasses com falha por órgão;
f. Valortotal de repasses com falha por motivo.
3. História de Usuário 3: Estatísticas de Repasses por critérios.
Descrição: Como membro da equipe financeira, desejo analisar as transações para compreender os repasses efetuados pelo governo.

Critérios de aceitação:

4. O sistema deverá exibir os seguintes repasses:
a. Detalhes do repasse com maior valor;
b. Detalhes do repasse com menor valor;
c. Dia com mais repasses;
d. Órgão com mais repasses;
e. Órgão com mais repasses com sucesso;
f. Órgão com mais repasses falhados;
g. Motivo de falha com mais repasses.
5. História de Usuário 4: Apresentação Automática de Detalhes de Transações.
Descrição: Como membro da equipe financeira, desejo analisar detalhadamente as transações de repasses efetuados por um determinado órgão que eu irei definir antes de começar o processamento do arquivo.

Critérios de aceitação:

a. O sistema deve ser capaz de identificar automaticamente transações que atendam ao critério de órgão responsável;
b. Os resultados da busca devem ser exibidos no console de forma organizada, apresentando todos os detalhes das transações encontradas;
c. A busca portransações deve ser realizada pelo sistema automaticamente, sem a necessidade de interação do usuário.
6. História de Usuário 5: Tratamento de erros.
Descrição: Como membro da equipe financeira, desejo saber se houve algum problema no processamento das transações. É considerado um problema no processamento quando uma transação tem o status "FALHA" mas não tem um valor no campo "MOTIVO DA FALHA."

Critérios de aceitação:

a. O sistema deverá exibir detalhes das transações que não foram processadas com sucesso.
7. História de Usuário 6: Ajustes nas estatísticas.
Descrição: Todas as outras estatísticas implementadas nas histórias anteriores não deverão levar em consideração as transações inválidas.

Critérios de aceitação:

O sistema não deverá levar em consideração as transações inválidas para efetuar os cálculos anteriormente realizados.