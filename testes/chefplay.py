from graphviz import Digraph

# Criando o fluxograma para a startup ChefPlay
dot = Digraph(comment='ChefPlay Fluxograma', format='png')
dot.attr(rankdir='TB', bgcolor='white', fontsize='10', labelloc='t', label='Fluxograma da Startup ChefPlay')

# Nós principais (Etapas)
dot.node('Start', 'Início', shape='oval', style='filled', fillcolor='lightgreen')
dot.node('Desafios', 'Desafios Semanais', shape='box', style='filled', fillcolor='lightblue')
dot.node('Competicao', 'Modo Competição', shape='box', style='filled', fillcolor='lightblue')
dot.node('Aulas', 'Aulas ao Vivo', shape='box', style='filled', fillcolor='lightblue')
dot.node('Niveis', 'Sistema de Níveis', shape='box', style='filled', fillcolor='lightblue')
dot.node('Mercados', 'Conexão com Mercados Locais', shape='box', style='filled', fillcolor='lightblue')
dot.node('Monetizacao', 'Monetização', shape='box', style='filled', fillcolor='lightcoral')
dot.node('Premium', 'Assinatura Premium', shape='box', style='filled', fillcolor='wheat')
dot.node('Parcerias', 'Parcerias Comerciais', shape='box', style='filled', fillcolor='wheat')
dot.node('End', 'Fim', shape='oval', style='filled', fillcolor='lightgreen')

# Conectando os nós
dot.edge('Start', 'Desafios', label='Acessar Plataforma')
dot.edge('Desafios', 'Competicao', label='Participar dos Desafios')
dot.edge('Competicao', 'Aulas', label='Enviar Fotos e Vídeos')
dot.edge('Aulas', 'Niveis', label='Cozinhar Juntos')
dot.edge('Niveis', 'Mercados', label='Ganha XP e Sobe de Nível')
dot.edge('Mercados', 'Monetizacao', label='Sugestão de Ingredientes')
dot.edge('Monetizacao', 'Premium', label='Acesso Exclusivo')
dot.edge('Monetizacao', 'Parcerias', label='Ofertas e Descontos')
dot.edge('Premium', 'End', label='Benefícios Recebidos')
dot.edge('Parcerias', 'End', label='Receitas de Parcerias')

# Gerar o arquivo de imagem
output_path = '/mnt/data/ChefPlay_Fluxograma.png'
dot.render(output_path, cleanup=True)

output_path
