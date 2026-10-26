const contact = [
    { id: 1, name: "Ada", phone: "08123456789" },
    { id: 2, name: "Bola", phone: "08012345678" },
    { id: 3, name: "Chidi", phone: "09123456789" }
]

function addContact(list, contact) {
    return [...list, contact]
}

function findByName(list, name) {
    return list.find(c => c.name.toLowerCase() === name.toLowerCase());
}

function updateContact(list, id, changes) {
    return list.map(c => {
        if (c.id === id) {
            return { ...c, ...changes }
        }
        return c
    })
}

function deleteContact(list, id) {
    return list.filter(c => c.id !== id);
}

console.log(findByName(contact, "BOLA"))
const added = addContact(contact, { id: 4, name: "Deji", phone: "08098765432" });
const updated = updateContact(contact, 1, { phone: "08001234567" });
const removed = deleteContact(contact, 2);
console.log(contact);
console.log(added)
