import pandas as pd
import xml.etree.ElementTree as ET

# Carica il file Excel
excel_file = 'tessere2.xlsx'
df = pd.read_excel(excel_file)

# Funzione per creare l'elemento XML per un cliente
def create_customer_element(row):
    customer = ET.Element('FidelityCustomer')
    
    ET.SubElement(customer, 'OpType').text = 'InsertUpdate'
    ET.SubElement(customer, 'CustomerCode').text = str(row['CustomerCode'])
    
    cards = ET.SubElement(customer, 'CustomerCards')
    ET.SubElement(cards, 'Card').text = str(row['Card'])
                                #card.text = '0' + str(row['Card'])
    
    ET.SubElement(customer, 'Name').text = str(row['Name'])
    return customer

# Funzione per creare l'elemento XML per un gruppo cliente
def create_customer_group_element(row):
    customer_group = ET.Element('FidelityCustomerGroups')
    
    ET.SubElement(customer_group, 'OpType').text = 'Update'
    ET.SubElement(customer_group, 'CustomerCode').text = str(row['CustomerCode'])
    
    groups = ET.SubElement(customer_group, 'Groups')
    ET.SubElement(groups, 'Group').text = str(row['Group']).zfill(4)
    return customer_group

# Funzione per creare l'elemento XML per i saldi
def create_fidelity_amount_element(row):
    fidel_amount = ET.Element('FidelityAmounts')
    
    ET.SubElement(fidel_amount, 'OpType').text = 'InsertUpdate'
    ET.SubElement(fidel_amount, 'CustomerCode').text = str(row['CustomerCode'])
    
    amounts = ET.SubElement(fidel_amount, 'Amounts')
    amount = ET.SubElement(amounts, 'Amount')
    amount.set('SaleDriveCode', '001')
    amount.text = str(row['Punti'])  # <-- usa la colonna "saldo"
    
    return fidel_amount


# Creazione delle root XML
root_customers = ET.Element('Customers')
root_customer_groups = ET.Element('CustomerGroups')
root_fidelity_amounts = ET.Element('FidelityAmountsList')

# Aggiungi un elemento per ciascuna riga del dataframe
for _, row in df.iterrows():
    root_customers.append(create_customer_element(row))
    root_customer_groups.append(create_customer_group_element(row))
    root_fidelity_amounts.append(create_fidelity_amount_element(row))

# Scrivi i file XML
ET.ElementTree(root_customers).write('customers_output.xml', encoding='utf-8', xml_declaration=True)
ET.ElementTree(root_customer_groups).write('customer_groups_output.xml', encoding='utf-8', xml_declaration=True)
ET.ElementTree(root_fidelity_amounts).write('OrangeInput_fidelity_amount.xml', encoding='utf-8', xml_declaration=True)

print('File XML generati con successo.')
