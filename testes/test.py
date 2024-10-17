from graphviz import Digraph

# Criando o gráfico
dot = Digraph(comment='DER App de Transporte Público')

# Tabelas
dot.node('Usuario', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Usuário</B></TD></TR>
  <TR><TD>ID_Usuario (PK)</TD></TR>
  <TR><TD>Nome</TD></TR>
  <TR><TD>Email</TD></TR>
  <TR><TD>Senha</TD></TR>
  <TR><TD>Tipo (Passageiro, Motorista, Administrador)</TD></TR>
</TABLE>>''')

dot.node('Ponto_Onibus', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Ponto de Ônibus</B></TD></TR>
  <TR><TD>ID_PontoOnibus (PK)</TD></TR>
  <TR><TD>Latitude</TD></TR>
  <TR><TD>Longitude</TD></TR>
  <TR><TD>Nome_Ponto</TD></TR>
  <TR><TD>Endereço</TD></TR>
</TABLE>>''')

dot.node('Rota', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Rota</B></TD></TR>
  <TR><TD>ID_Rota (PK)</TD></TR>
  <TR><TD>Nome_Rota</TD></TR>
  <TR><TD>Descrição</TD></TR>
  <TR><TD>ID_PontoOnibus_Inicial (FK)</TD></TR>
  <TR><TD>ID_PontoOnibus_Final (FK)</TD></TR>
</TABLE>>''')

dot.node('Onibus', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Ônibus</B></TD></TR>
  <TR><TD>ID_Onibus (PK)</TD></TR>
  <TR><TD>Placa</TD></TR>
  <TR><TD>Modelo</TD></TR>
  <TR><TD>Capacidade</TD></TR>
</TABLE>>''')

dot.node('Horario', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Horário</B></TD></TR>
  <TR><TD>ID_Horario (PK)</TD></TR>
  <TR><TD>ID_Rota (FK)</TD></TR>
  <TR><TD>ID_Onibus (FK)</TD></TR>
  <TR><TD>Hora_Partida</TD></TR>
  <TR><TD>Hora_Chegada</TD></TR>
</TABLE>>''')

dot.node('Historico', '''<<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2"><B>Histórico de Viagens</B></TD></TR>
  <TR><TD>ID_Historico (PK)</TD></TR>
  <TR><TD>ID_Usuario (FK)</TD></TR>
  <TR><TD>ID_Horario (FK)</TD></TR>
  <TR><TD>Data_Viagem</TD></TR>
  <TR><TD>Avaliação</TD></TR>
</TABLE>>''')

# Relacionamentos
dot.edge('Usuario', 'Historico', label='1:N')
dot.edge('Historico', 'Horario', label='N:1')
dot.edge('Horario', 'Rota', label='N:1')
dot.edge('Horario', 'Onibus', label='N:1')
dot.edge('Rota', 'Ponto_Onibus', label='N:1 (Ponto Inicial)')
dot.edge('Rota', 'Ponto_Onibus', label='N:1 (Ponto Final)')

# Renderizar
dot