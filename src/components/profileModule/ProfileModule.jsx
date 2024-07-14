export default function ManageProfile()
{
    return <>
        <div className="profile__module">
            <form>
                <label htmlFor="name">Change your name</label>
                <input type="text" id="name" placeholder="your name" />
                <label htmlFor="bio">Change your name</label>
                <input type="text" id="bio" placeholder="your bio" />
            </form>
        </div>
    </>
}